export interface WeatherData {
    LocalObservationDateTime: string;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType: null | string;
    IsDayTime: boolean;
    Temperature: {
        Metric: {
        Value: number;
        Unit: string;
        UnitType: number;
        };
        Imperial: {
        Value: number;
        Unit: string;
        UnitType: number;
        };
    };
    MobileLink: string;
    Link: string;
}
  