import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const JobAd = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://sitepoint-lambda-production.s3-us-west-2.amazonaws.com/githubjobs.json"
      );

      setData(result.data);
    };
    fetchData();
  }, []);

  const job = data[Math.floor(Math.random() * data.length)];

  return (
    <div className="JobAd">
      {data.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <Fragment>
          <div className="JobAd-header">
            <div className="JobAd-type">{props.type}</div>
            <div className="JobAd-location">
              <FontAwesomeIcon className="JobAd-icon" icon={faMapMarkerAlt} />
              {job.location}
            </div>
          </div>
          <div className="JobAd-title">
            <p className="JobAd-title-text">{job.title}</p>
            <p className="JobAd-company">@{job.company}</p>
          </div>
          <div>
            <p className="JobAd-description">
              {job.description}...
              <a className="JobAd-readmore" href={job.url}>
                (Read More)
              </a>
            </p>
            <a className="JobAd-link" href={job.url}>
              Apply Now
            </a>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default JobAd;
