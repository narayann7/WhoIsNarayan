import { base64Encode } from "./common_services";

class StorageService {
  static GET_STARTED_KEY: string = 'GET_STARTED_KEY';

  static isGetStarted(): boolean {
    return !!localStorage.getItem(base64Encode(StorageService.GET_STARTED_KEY));
  }
  static setGetStarted(): void {
    if (!StorageService.isGetStarted()) {
      localStorage.setItem(base64Encode(StorageService.GET_STARTED_KEY), 'true');
    }
  }

}


export default StorageService;