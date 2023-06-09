import card1 from "assets/images/card_1.png";
import card2 from "assets/images/card_2.png";
import card3 from "assets/images/card_3.png";
const generateImg = (index) => {
    if (index % 2 === 0) {
        return card1
    } else if (index % 3 === 0) {
        return card2
    }
    return card3
};

export default generateImg  