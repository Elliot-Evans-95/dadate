// TODO: Turn this into a chain

type Countries = 'UK' | 'US';
type ParsedDate = Object | Array<any> | string | number;
type Cast = 'Object' | 'Array' | 'string' | 'number';

class DaDate {
    private readonly _date: Date;
    private readonly _timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
    private readonly _locale: string = navigator.language;
    private _parsedDate: ParsedDate;

    constructor(currentDate: Date = new Date()) {
        this._date = currentDate;
    }

    //TODO: Changes locale and timezone?
    setLocation(country: Countries): void {}

    //TODO: Changes locale and timezone?
    parseDate(settings: any): void {}

    newDate(): Date {
        return this._date;
    }

    newUTCDate(): string {
        return this._date.toUTCString();
    }

    currentTime(): number {
        return this._date.getTime();
    }

    dateTime(): string {
        return new Intl.DateTimeFormat(this._locale).format(this._date);
    }

    monthName(): string {
        return this._date.toLocaleDateString(this._locale, { month: 'long' });
    }

    months(): number {
        return this._date.getMonth();
    }

    monthsUTC(): number {
        return this._date.getUTCMonth();
    }

    dayName(): string {
        return this._date.toLocaleDateString(this._locale, { weekday: 'long' });
    }

    days(): number {
        return this._date.getDay();
    }

    daysUTC(): number {
        return this._date.getUTCDay();
    }

    hours(): number {
        return this._date.getHours();
    }

    hoursUTC(): number {
        return this._date.getUTCHours();
    }

    minutes(): number {
        return this._date.getMinutes();
    }

    minutesUTC(): number {
        return this._date.getUTCMinutes();
    }

    seconds(): number {
        return this._date.getSeconds();
    }

    secondsUTC(): number {
        return this._date.getUTCSeconds();
    }

    milliseconds(): number {
        return this._date.getMilliseconds();
    }

    millisecondsUTC(): number {
        return this._date.getUTCMilliseconds();
    }

    getDifference(anotherDate: Date): number {
        const msPerDay = 1000 * 60 * 60 * 24;
        const utc1 = Date.UTC(this._date.getFullYear(), this._date.getMonth(), this._date.getDate());
        const utc2 = Date.UTC(anotherDate.getFullYear(), anotherDate.getMonth(), anotherDate.getDate());

        return Math.floor((utc2 - utc1) / msPerDay);
    }

    // TODO: Cast the date into a type of choice
    cast(type: Cast): void {}

    get date(): ParsedDate {
        return this._parsedDate || this._date;
    }

}
