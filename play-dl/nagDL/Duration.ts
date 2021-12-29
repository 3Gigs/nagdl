/**
 * A song duration implementation
 * 
 */
export class Duration {
    _hours: number = 0;
    _minutes: number = 0;
    _seconds: number = 0;

    public constructor();
    public constructor(seconds: number);
    public constructor(seconds: number, minutes: number);
    public constructor(seconds: number, minutes: number, hours: number);
    public constructor(seconds = 0, minutes = 0, hours = 0) {
        this._hours =  hours;
        this.setMinutes(minutes);
        this.setSeconds(seconds);
    }

    get hours(): number {
        return this._hours;
    }

    get minutes(): number {
        return this._minutes;
    }

    get seconds(): number {
        return this._seconds;
    }

    get durationFormatted(): string {
        return Duration.formatDuration(this._seconds, this._minutes, this._hours);
    }

    /**
     * Set the number of seconds
     *
     * @remarks
     * If the parameter is outside the (0-60) range, ```setSeconds()``` attempts
     * to update the Duration object accordingly. Note that while negative 
     * seconds are allowed, it may cause unintended side effects
     *
     * @param sec The seconds specified
     * @returns The number of seconds
     */
    public setSeconds(sec: number): number {
        let min = this._minutes;
        while(sec < 0 || sec >= 60)
        {
            if (sec >= 60) {
                this.setMinutes(++min);
                sec -= 60;
            } else {
                this.setMinutes(--min);
                sec += 60;
            }
        }
        this._seconds = sec;
        return sec;
    }

    /**
     * Sets the number of minutes
     *
     * @remarks
     * If the parameter is outside the (0-60) range, ```setSeconds()``` attempts
     * to update the Duration object accordingly
     *
     * @param min
     * @returns The number of minutes
     */
    public setMinutes(min: number): number {
        while(min < 0 || min >= 60)
        {
            console.log("Minutes: " + min);
            if (min >= 60) {
                this._hours++;
                min -= 60;
            } else {
                this._hours--;
                min += 60;
            }
        }
        this._minutes = min;
        return min;
    }

    public static formatDuration(seconds: number, minutes: number, hours?: number): string {
        let result = '';

        if (hours) {
            result += hours + ":";
        }

        if(minutes < 10) {
            result += "0";
        }
        result += minutes + ":";

        if(seconds < 10) {
            result += "0";
        }
        result += seconds;

        return result
    }
}