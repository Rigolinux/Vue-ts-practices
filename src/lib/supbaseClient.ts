import { createClient } from '@supabase/supabase-js';
import {envConfig} from '@/config/envConfig'


export const supabase = createClient(envConfig.SupbaseUrl, envConfig.Supbase_API_KEY);