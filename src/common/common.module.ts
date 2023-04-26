import { Module } from '@nestjs/common';
import { AxiosApdater } from './adapters/axios.adapter';

@Module({
    providers: [AxiosApdater],
    exports: [AxiosApdater]
})
export class CommonModule {}
