//CONEXIÓN CON BASE DE DATOS
import { PrismaClient } from '@prisma/client'


let prisma = new PrismaClient()


export const db = prisma;