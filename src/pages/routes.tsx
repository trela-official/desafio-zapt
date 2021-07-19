import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Feedbacks } from "../components/Feedbacks";
import { UserComments } from "../components/UserComments";
import { Welcome } from "../components/Welcome";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/feedbacks" component={Feedbacks} />
        <Route path="/usercomments" component={UserComments} />
      </Switch>
    </BrowserRouter>
  );
}
