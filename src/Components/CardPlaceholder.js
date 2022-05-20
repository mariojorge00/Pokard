import React from "react";
import { motion } from "framer-motion";
import "../Styles/App.scss";
function CardPlaceholder() {
  return (
    <motion.li className="cardSkeleton ">
      <div className="imgBox"></div>
      <div className="imgTitle1">#0000</div>
      <div className="imgTitle2">CHARMANDER ekn</div>
      <div className="imgBody2"> .</div>
      <div className="imgBody4"> plant sprouts and grows with</div>
      <div className="imgBody5">this POKéMON kjnjnoinonok.</div>
      <div className="imgMetrics"></div>
      <div className="imgMoreMetrics">
        <div className="imgTypes-side">
          <div className="imgTypes">
            <div className="imgText">ioinonkj</div>
            <div className="imgWrap">
              <div className="imgIcon"></div>
              <div className="imgIcon"></div>
            </div>
          </div>
          <div className="imgWeak">
            <div className="imgText">ioinoknlknkjknokjnkj</div>
            <div className="imgWrap">
              <div className="imgIcon"></div>
              <div className="imgIcon"></div>
            </div>
          </div>
        </div>
        <div className="imgStats">
          <div className="imgText">ioinonkjk</div>
        </div>
      </div>
    </motion.li>
  );
}
export default React.memo(CardPlaceholder, (prev, next) => {
  return true;
});
