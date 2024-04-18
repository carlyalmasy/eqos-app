import bronzeOne from "../assets/images/gauges/bronze-1.svg";
import bronzeTwo from "../assets/images/gauges/bronze-2.svg";
import silverOne from "../assets/images/gauges/silver-1.svg";
import silverTwo from "../assets/images/gauges/silver-2.svg";
import silverThree from "../assets/images/gauges/silver-3.svg";
import goldOne from "../assets/images/gauges/gold-1.svg";
import goldTwo from "../assets/images/gauges/gold-2.svg";
import goldThree from "../assets/images/gauges/gold-3.svg";
import platinumOne from "../assets/images/gauges/platinum-1.svg";
import platinumTwo from "../assets/images/gauges/platinum-2.svg";
import unrated from "../assets/images/gauges/unrated.svg";

export function overallRating(data) {
    const overallScore = data.scores.overall;
    if (overallScore === null ) return "unrated";
    if (overallScore <= 1.0) return "bronze";
    if (overallScore >= 1.01 && overallScore <= 2.5) return "silver";
    if (overallScore >= 2.51 && overallScore <= 4.0) return "gold";
    if (overallScore >= 4.01) return "platinum";
    return "unrated";
}

export function overallQuality(data) {
    const overallScore = data.scores.overall;
    if (overallScore === null ) return "";
    return "Overall Quality";
}

 export function ratingImageSource(data) {
    const overallScore = data.scores.overall;
    if (overallScore === null) return unrated;
    if (overallScore <= 0.5) return bronzeOne;
    if (overallScore >= 0.51 && overallScore <= 1.0) return bronzeTwo;
    if (overallScore >= 1.01 && overallScore <= 1.5) return silverOne;
    if (overallScore >= 1.51 && overallScore <= 2.0) return silverTwo;
    if (overallScore >= 2.01 && overallScore <= 2.5) return silverThree;
    if (overallScore >= 2.51 && overallScore <= 3.0) return goldOne;
    if (overallScore >= 3.01 && overallScore <= 3.5) return goldTwo;
    if (overallScore >= 3.51 && overallScore <= 4.0) return goldThree;
    if (overallScore >= 4.01 && overallScore <= 4.5) return platinumOne;
    if (overallScore >= 4.51 && overallScore <= 5.0) return platinumTwo;
    return unrated;
 }
