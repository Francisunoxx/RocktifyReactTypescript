import * as React from "react";
import * as style from "../../css/Dashboard.css";
//import Header from "../components/Header";
//import PropTypes from 'prop-types';

export class Dashboard extends React.Component<any, any> {

    /*constructor(props) {
        super(props);
    }*/

    render() {
        return (
            <div className={style.divDashboardContainer}>
                <div className={style.divDashboardBody}>
                    <div className={style.divMusic}>
                        <div className={style.divRecentlyPlayed}>
                            <h1>FEATURED ARTISTS</h1>
                        </div>
                        <div className={style.divMyPlaylists}>
                            <h1>TOP BANDS</h1>
                        </div>
                        <div className={style.divNewReleases}>
                            <h1>NEW RELEASES</h1>
                        </div>
                    </div>
                    <div className={style.divTopMusic}>
                        <div className={style.divTopMusicBody}>
                            <h1>TOP 10 SONGS</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
