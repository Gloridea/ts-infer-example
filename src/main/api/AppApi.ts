import {PreviewWindowService} from './PreviewWindowService';
import {PreferenceService} from './PreferenceService';

export class AppApi {
    preview = new PreviewWindowService();
    preference = new PreferenceService();
}