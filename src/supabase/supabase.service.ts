import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_KEY');
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  // Exemple : récupérer des données
  async getData(table: string) {
    const { data, error } = await this.supabase.from(table).select('*');
    if (error) {
      throw new Error(`Erreur lors de la récupération des données : ${error.message}`);
    }
    return data;
  }
}
