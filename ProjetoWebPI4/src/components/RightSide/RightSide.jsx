// import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import style from './styleRightSide.module.css'

const RightSide = () => {
  return (
    <div className={style.RightSide}>
      <div>
        <h3 className={style.Title}>Últimas Noticias</h3>
        <Updates />
      </div>
    </div>
  );
};

export default RightSide;