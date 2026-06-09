import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role === 'VIEWER')
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const { modelId, name } = await req.json();
  if (!modelId || !name?.trim()) return NextResponse.json({ error: 'modelId and name required' }, { status: 400 });

  const maxOrder = await prisma.ontologySubModel.aggregate({ where: { modelId }, _max: { sortOrder: true } });
  const sub = await prisma.ontologySubModel.create({
    data: { modelId, name: name.trim(), sortOrder: (maxOrder._max.sortOrder ?? 0) + 1 },
  });

  await prisma.change.create({
    data: { userId: (session.user as any).id, action: 'CREATE', entityType: 'SubModel', entityId: sub.id, entityName: sub.name, after: sub },
  });

  return NextResponse.json(sub, { status: 201 });
}
