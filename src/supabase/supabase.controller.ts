import { Controller, Get } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Controller('supabase')
export class SupabaseController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get('data')
  async getData() {
    const data = await this.supabaseService.getData('your_table_name'); // Remplace par le nom de ta table
    return data;
  }
}
