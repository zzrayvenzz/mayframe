import React from "react";
import classes from "./Value.module.css";
import Honesty from "../../Assets/honesty.png";
import Teamwork from "../../Assets/teamwork.png";
import Liberty from "../../Assets/liberty.png"
import Communication from "../../Assets/communication.png"
import Service from "../../Assets/service.png"
import Spirit from "../../Assets/spoirit.png"

const Value = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <h3>Our Core Values</h3>
      </div>
      <div className={classes.cardWrap}>
        <div className={classes.cards}>
          <div className={classes.card}>
            <div className={classes.cardIcon}>
              <img src={Honesty} alt="Honesty" />
            </div>
            <div className={classes.cardContent}>
              <h4>Honesty</h4>
              <p>
                For us as a company, it is very important that the information
                provided to our customer is honest and true. This value is what
                makes us different and help us to make decisions based on firm
                and true facts.
              </p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardIcon}>
              <img src={Teamwork} alt="Honesty" />
            </div>
            <div className={classes.cardContent}>
              <h4>Teamwork</h4>
              <p>
                We built a team that works result-oriented, unifying talent and
                give and take to respect and join different opinions, knowledge
                and abilities because teamwork and mutual support build the
                foundation of our relationship.
              </p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardIcon}>
              <img src={Liberty} alt="Honesty" />
            </div>
            <div className={classes.cardContent}>
              <h4>Liberty</h4>
              <p>
                Our team member must show loyalty, referring to faithfulness,
                commitment, and interest defense in any moment for and in the
                name of the company.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.cards2}>
          <div className={classes.card}>
            <div className={classes.cardIcon}>
              <img src={Communication} alt="communication" />
            </div>
            <div className={classes.cardContent}>
              <h4>Communication</h4>
              <p>
                For us as a company, it is very important that the information
                provided to our customer is honest and true. This value is what
                makes us different and help us to make decisions based on firm
                and true facts.
              </p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardIcon}>
              <img src={Service} alt="Honesty" />
            </div>
            <div className={classes.cardContent}>
              <h4>Service Quality</h4>
              <p>
                We built a team that works result-oriented, unifying talent and
                give and take to respect and join different opinions, knowledge
                and abilities because teamwork and mutual support build the
                foundation of our relationship.
              </p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.cardIcon}>
              <img src={Spirit} alt="Honesty" />
            </div>
            <div className={classes.cardContent}>
              <h4>Constructive Spirit</h4>
              <p>
                Our team member must show loyalty, referring to faithfulness,
                commitment, and interest defense in any moment for and in the
                name of the company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
