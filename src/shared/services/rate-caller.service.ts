import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class RateCallerService {
  constructor(private readonly http: HttpService) {}
  async getSpecialRatesByMerchantId(merchantId: number) {
    const res = this.http
      .get('https://pokeapi.co/api/v2/pokemon/ditto')
      .subscribe((res) => {
        console.log('resoado', res.data);
      });
  }
}
