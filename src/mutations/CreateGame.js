import Relay from "react-relay";

export default class CreateGame extends Relay.Mutation {
  getVariables() {
    return {
      p1userId: this.props.user.id,
      winnerId: this.props.winnerId,
      p1Guess: this.props.guess,
      p1GuessCorrect: this.props.guessCorrect
    };
  }

  getMutation() {
    return Relay.QL`mutation{createUser}`;
  }

  getFatQuery() {
    return Relay.QL`
			fragment on CreateUserPayload {
				user
				viewer
			}
		`;
  }

  getConfigs() {
    return [
      {
        type: "RANGE_ADD",
        parentName: "viewer",
        connectionName: "allUsers",
        edgeName: "user",
        rangeBehaviors: {
          "": "append"
        }
      },
      {
        type: "REQUIRED_CHILDREN",
        children: [
          Relay.QL`
						fragment on CreateUserPayload {
							user
						}
					`
        ]
      }
    ];
  }
}
