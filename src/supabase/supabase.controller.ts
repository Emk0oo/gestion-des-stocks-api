import { Controller, Get } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Controller('supabase')
export class SupabaseController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get('data')
  async getData() {
    const data = await this.supabaseService.getData('roles'); // Remplace par le nom de ta table
    console.log(data);
    return data;
  }
}
