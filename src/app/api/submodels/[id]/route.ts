import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role === 'VIEWER')
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const data = await req.json();
  const before = await prisma.ontologySubModel.findUnique({ where: { id: params.id } });
  const sub = await prisma.ontologySubModel.update({ where: { id: params.id }, data });

  await prisma.change.create({
    data: { userId: (session.user as any).id, action: 'UPDATE', entityType: 'SubModel', entityId: sub.id, entityName: sub.name, before, after: sub },
  });

  return NextResponse.json(sub);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session || (session.user as any).role !== 'ADMIN')
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

  const sub = await prisma.ontologySubModel.delete({ where: { id: params.id } });
  await prisma.change.create({
    data: { userId: (session.user as any).id, action: 'DELETE', entityType: 'SubModel', entityId: sub.id, entityName: sub.name, before: sub },
  });

  return NextResponse.json({ ok: true });
}
