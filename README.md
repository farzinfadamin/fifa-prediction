Fifa Prediction Program
===============

#Setup Instance
---------------------
```sh
npm install
grunt

//create matches collection
create-matches.js

// create teams collection.
create-teams.js

// create user records first (ONE TIME DEAL)
create-users.js

// create empty prediction list based on users. (ONE TIME DEAL)
create-empty-prediction.js

// read users predictions and update databse records. (ONE TIME DEAL)
insert-user-prediction.js

// update each user prediction match score based on the current matches.
update-prediction-scores.js

// update match table with new scores.
update-match-scores.js

// re-run user prediction match
update-prediction-scores.js


```
once you type grunt in command line your chrome web browser will load.


#API
------------------

###Daily match scores
---------------------------
```url
http://www.kimonolabs.com/api/cp27e5wi?apikey=ad2ff693e51d4cc636bdd59c3daf4e2a
```

### All Matches
-----------------
```url
http://www.kimonolabs.com/api/98unoz7e?apikey=ad2ff693e51d4cc636bdd59c3daf4e2a
```

###All Qualified Teams
---------------------------
```url
http://www.kimonolabs.com/api/aqp90wd0?apikey=ad2ff693e51d4cc636bdd59c3daf4e2a
```

#Game Rules
-----------------

Group Stage:

5 points for each exact score line of each game.

3 points for each prediction of the correct winner with the correct goal difference.

1 point for predicting the correct winner/tie game. (Clarification: In Case of a Tie, The only possible points to get are 5 & 1. No possibility of 3 points for a tie!)

4 points for prediction [by correct order] of the top 2 teams advancing of each group

2 point is given for prediction of the top 2 teams of each group by an incorrect order

Knock Out Stage:

4 points are given for the correct prediction of each team in the Quarter-Finals (Last 8)

7 points are given for the correct prediction of each team in the Semi-Finals (Last 4)

8 points are given for the correct prediction of each team in the final

5 points are given for the correct prediction of the 3rd place team of the tournament

7 points are given for the prediction of the tournament’s runner-up

10 points are given for the prediction of the world cup champions

6 points are given for the prediction of the Top-Goal-Scorer of the Tournament
