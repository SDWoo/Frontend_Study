import React, { useEffect } from "react";
import { getUser, useUsersDispatch, useUsersState } from "./UserContext";

function User({ id }) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const { loading, error, data: user } = state.user;

  useEffect(() => {
    getUser(dispatch, id);
  }, [dispatch, id]);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
}

export default User;
