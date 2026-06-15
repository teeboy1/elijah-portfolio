import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const candidates: string[] = [];

  // primary: project's public folder
  candidates.push(path.join(process.cwd(), 'public', 'resume.pdf'));

  // check for a worktree sibling folder that may contain the file
  try {
    const worktreesDir = path.join(process.cwd(), '..', 'elijah-portfolio.worktrees');
    if (fs.existsSync(worktreesDir)) {
      const entries = fs.readdirSync(worktreesDir, { withFileTypes: true });
      for (const e of entries) {
        if (e.isDirectory()) {
          const p = path.join(worktreesDir, e.name, 'public', 'resume.pdf');
          candidates.push(p);
        }
      }
    }
  } catch (err) {
    // ignore
  }

  for (const p of candidates) {
    if (fs.existsSync(p)) {
      const buffer = await fs.promises.readFile(p);
      return new NextResponse(buffer, {
        status: 200,
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="resume.pdf"',
          'Content-Length': String(buffer.length),
        },
      });
    }
  }

  return new NextResponse('Resume not found', { status: 404 });
}
