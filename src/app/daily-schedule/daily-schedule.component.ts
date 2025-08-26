import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

interface HotelInfo {
  name: string;
  url?: string;
}

interface ItineraryDay {
  date: string;
  title: string;
  details?: string;
  hotel?: HotelInfo;
}

@Component({
  selector: 'daily-schedule',
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatListModule],
  templateUrl: './daily-schedule.component.html',
  styleUrl: './daily-schedule.component.scss',
})
export class DailyScheduleComponent {
  days: ItineraryDay[] = [
    {
      date: 'Mon, Nov 17',
      title: 'Depart Los Angeles (LAX) for Tokyo',
    },
    {
      date: 'Tue, Nov 18',
      title: 'Arrive Tokyo — Haneda (HND) 9:10 PM',
      details: 'Overnight in Tokyo.',
      hotel: { name: 'TBD' },
    },
    {
      date: 'Wed, Nov 19',
      title:
        'Morning in Tokyo → Travel to J-Village Area, Fukushima Prefecture',
      details: 'Soccer games for the Deaflympics begin.',
      hotel: {
        name: 'Grand Park Hotel Panex Iwaki',
        url: 'https://grandpark-px.jp/en/iwaki/',
      },
    },
    {
      date: 'Thu, Nov 20',
      title: 'J-Village Area — games',
      hotel: {
        name: 'Grand Park Hotel Panex Iwaki',
        url: 'https://grandpark-px.jp/en/iwaki/',
      },
    },
    {
      date: 'Fri, Nov 21',
      title: 'J-Village Area — games',
      hotel: {
        name: 'Grand Park Hotel Panex Iwaki',
        url: 'https://grandpark-px.jp/en/iwaki/',
      },
    },
    {
      date: 'Sat, Nov 22',
      title: 'J-Village Area — games',
      hotel: {
        name: 'Grand Park Hotel Panex Iwaki',
        url: 'https://grandpark-px.jp/en/iwaki/',
      },
    },
    {
      date: 'Sun, Nov 23',
      title: 'J-Village Area — games',
      hotel: {
        name: 'Grand Park Hotel Panex Iwaki',
        url: 'https://grandpark-px.jp/en/iwaki/',
      },
    },
    {
      date: 'Mon, Nov 24',
      title: 'J-Village Area — games',
      hotel: {
        name: 'Grand Park Hotel Panex Iwaki',
        url: 'https://grandpark-px.jp/en/iwaki/',
      },
    },
    {
      date: 'Tue, Nov 25',
      title: 'J-Village Area — games',
      hotel: {
        name: 'Grand Park Hotel Panex Iwaki',
        url: 'https://grandpark-px.jp/en/iwaki/',
      },
    },
    {
      date: 'Wed, Nov 26',
      title: 'Morning Check out Iwaki → Depart for Tokyo',
      details: 'Spend the day and night in Tokyo. Disneyland!',
      hotel: {
        name: 'Hyatt Regency Tokyo Bay',
        url: 'https://www.hyatt.com/hyatt-regency/en-US/nrtzt-hyatt-regency-tokyo-bay',
      },
    },
    {
      date: 'Thu, Nov 27',
      title: 'Morning: Depart Tokyo for Osaka — Arrive in Osaka',
      hotel: {
        name: 'W Hotel Osaka',
        url: 'https://www.marriott.com/en-us/hotels/osaow-w-osaka/overview/',
      },
    },
    {
      date: 'Fri, Nov 28',
      title: 'Osaka',
      hotel: {
        name: 'W Hotel Osaka',
        url: 'https://www.marriott.com/en-us/hotels/osaow-w-osaka/overview/',
      },
    },
    {
      date: 'Sat, Nov 29',
      title: 'Osaka',
      hotel: {
        name: 'W Hotel Osaka',
        url: 'https://www.marriott.com/en-us/hotels/osaow-w-osaka/overview/',
      },
    },
    {
      date: 'Sun, Nov 30',
      title: 'Osaka',
      hotel: {
        name: 'W Hotel Osaka',
        url: 'https://www.marriott.com/en-us/hotels/osaow-w-osaka/overview/',
      },
    },
    {
      date: 'Mon, Dec 1',
      title: 'Osaka',
      hotel: {
        name: 'W Hotel Osaka',
        url: 'https://www.marriott.com/en-us/hotels/osaow-w-osaka/overview/',
      },
    },
    {
      date: 'Tue, Dec 2',
      title: 'Depart Osaka for Tokyo (Final stay)',
      hotel: { name: 'TBD' },
    },
    {
      date: 'Wed, Dec 3',
      title: 'Tokyo — Final stay',
      hotel: { name: 'TBD' },
    },
    {
      date: 'Thu, Dec 4',
      title: 'Tokyo — Late evening departure',
      details: 'Depart Tokyo (HND) just after midnight for Los Angeles (LAX).',
    },
    {
      date: 'Fri, Dec 5',
      title: 'Arrive Los Angeles (LAX)',
      details:
        'Flight departs Tokyo at 12:50 AM Fri (local). Arrive back in Los Angeles due to time difference.',
    },
  ];
}
