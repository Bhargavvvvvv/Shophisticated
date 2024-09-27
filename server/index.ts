import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as scheama from '@/server/schema';

const sql = neon(process.env.POSTGRES_URL!);
export const db = drizzle(sql,{schema:scheama,logger:true});