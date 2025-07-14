import styles from './BasketBallGameTile.module.css'


export function BasketballGameTile(params: any) {

    const homeTeam = params.gameData.teams.home.nickname;
    const visitorTeam = params.gameData.teams.visitors.nickname;
    const scoreHomeTeam = params.gameData.scores.home.points;
    const scoreVisitorTeam = params.gameData.scores.visitors.points;
    const currPeriod = params.gameData.periods.current;
    const totalPeriods = params.gameData.periods.total;

    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <p className={styles.teamName}>{"TEAM NAME"}</p>
                    <p>{"Score:  " + scoreHomeTeam }</p>
                </div>
                <div className={styles.col}>
                    <p>{"Team Name"}</p>
                    <p>{"Visitor: " +  scoreVisitorTeam}</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <p>{"Current Period: " + currPeriod}</p>
                </div>
                <div className={styles.col}>
                    <p>{"Total Periods: " + totalPeriods}</p>
                </div>
            </div>
        </div>
    )
}