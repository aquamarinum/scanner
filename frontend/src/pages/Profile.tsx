import Button from "../components/Button";
import { useSignInOut } from "../hooks/useSignInOut";
import Loader from "../components/Loader";
import { usePopup } from "../hooks/usePopup";
import { useEffect } from "react";
import Popup from "../components/Popup";
import ButtonWrapper from "../components/ButtonWrapper";

const Profile = () => {
  const { loading, error, logout, resetError } = useSignInOut();

  const onPressLogout = () => {
    logout();
  };

  if (loading) return <Loader />;

  return (
    <div>
      <ButtonWrapper>
        <Button active onPress={onPressLogout}>
          SIGN OUT
        </Button>
      </ButtonWrapper>
    </div>
  );
};

export default Profile;
