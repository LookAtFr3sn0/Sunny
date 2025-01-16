export default function getIcon(forecastIcon: string) {
    let icon;
    switch (forecastIcon) {
        case 'clear-day':
          icon = 'sunny';
          break;
        case 'clear-night':
          icon = 'bedtime';
          break;
        case 'rain':
          icon = 'rainy';
          break;
        case 'snow':
          icon = 'cloudy_snowing';
          break;
        case 'sleet':
          icon = 'cloudy_snowing';
          break;
        case 'wind':
          icon = 'air'
          break;
        case 'fog':
          icon = 'foggy'
          break;
        case 'cloudy':
          icon = 'cloud'
          break;
        case 'partly-cloudy-day':
          icon = 'partly_cloudy_day'
          break;
        case 'partly-cloudy-night':
          icon = 'partly_cloudy_night'
          break;
        default:
          icon = 'weather_hail'
          break;
      }
    return icon;
}