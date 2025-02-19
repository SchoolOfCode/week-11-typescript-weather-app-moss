
export interface WeatherData {
    name: string;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
      pressure: number;
    };
    weather: Array<{
      description: string;
      icon: string;
      main: string;
    }>;
  }