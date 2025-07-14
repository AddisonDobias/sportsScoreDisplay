import styles from './BasketBallGameTile.module.css'


const numberToString: Record<number, string> = {
    1: "First",
    2: "Second",
    3: "Third",
    4: "Fourth"
}

export function BasketballGameTile(params: any) {

    const homeTeam = params.gameData.teams.home.nickname;
    const visitorTeam = params.gameData.teams.visitors.nickname;
    const scoreHomeTeam = params.gameData.scores.home.points;
    const scoreVisitorTeam = params.gameData.scores.visitors.points;
    const currPeriod: number = params.gameData.periods.current;
    const testTime = {min: 10, sec: 10};
    const period = numberToString[currPeriod];
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <p className={styles.teamName}>{homeTeam.toUpperCase()}</p>
                    <p className={styles.teamName}>{scoreHomeTeam }</p>
                </div>
                <div className={styles.col}>
                    <p className={styles.teamName}>{visitorTeam.toUpperCase()}</p>
                    <p className={styles.teamName}>{scoreVisitorTeam}</p>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <p>{`${period.toUpperCase()} QUARTER`}</p>
                </div>
                <div className={styles.col}>
                    <p>{`${testTime.min}:${testTime.sec}`}</p>
                </div>
            </div>
        </div>
    )
}