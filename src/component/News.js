import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "'Have Australia just won the Ashes?'",
      description:
        'Australian podcasters The Grade Cricketer describe England\'s performance on the first day of the second Test at Lord\'s as "insipid" and ask: "have Australia just won the Ashes?"',
      url: "http://www.bbc.co.uk/sport/av/cricket/66048898",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/cpsprodpb/33BB/production/_130234231_p0fxw2r5.jpg",
      publishedAt: "2023-06-29T10:07:27.3370604Z",
      content:
        "'Racism, sexism, classism and elitism widespread in cricket' Video, 00:01:11'Racism, sexism, classism and elitism widespread in cricket'",
    },
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Sonia Twigg",
      title:
        "Champagne and a sea of egg and bacon: Lord’s lays bare cricket’s class divide",
      description:
        "The home of cricket hosts the second Ashes Test, but, as Sonia Twigg discusses, Lord’s provides insight into the sport’s troubling past and may not be helping its future",
      url: "http://www.independent.co.uk/sport/cricket/lords-ashes-cricket-diversity-mcc-b2365898.html",
      urlToImage:
        "https://static.independent.co.uk/2023/06/28/17/CRICKET%20England%20%2016190318.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-06-29T07:09:49Z",
      content:
        "Sign up to our free sport newsletter for all the latest news on everything from cycling to boxing\r\nSign up to our free sport email for all the latest news\r\nIt was almost with a sense of irony that it… [+3800 chars]",
    },
    {
      source: {
        id: "bbc-sport",
        name: "BBC Sport",
      },
      author: null,
      title: "England 'too casual' for Ashes cricket - Vaughan",
      description:
        'England were "too casual" on day one of the second Ashes Test and must realise the contest "is not just another game", says ex-captain Michael Vaughan.',
      url: "http://www.bbc.co.uk/sport/cricket/66048592",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1095D/production/_130233976_gettyimages-1503352563.jpg",
      publishedAt: "2023-06-28T21:22:17.699067Z",
      content:
        'England were "too casual" on day one of the second Ashes Test and must realise the contest "is not just another game", says former captain Michael Vaughan.\r\nAmid a lacklustre England display, Austral… [+3043 chars]',
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello i am a constructor from News Component");
    this.state = {
         articles : this.articles,
         loading : false
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="myDes"
              imageUrl="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1095D/production/_130233976_gettyimages-1503352563.jpg"
                newsUrl = "TODO"
            />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDes" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDes" />
          </div>
        </div>
      </div>
    );
  }
}

export default News