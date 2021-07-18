import { UserCommentCardProps } from 'components/UserCommentCard';
import {
  userComment,
  anotherUserComment,
} from 'components/UserCommentCard/mock';

export const usersComments: UserCommentCardProps[] = [
  { ...userComment },
  { ...anotherUserComment },
  { ...userComment },
  { ...anotherUserComment },
];
