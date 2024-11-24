import Button from "../components/Button";
import { useSignInOut } from "../hooks/useSignInOut";
import Loader from "../components/Loader";
import { usePopup } from "../hooks/usePopup";
import { useEffect } from "react";
import Popup from "../components/Popup";

const Profile = () => {
  const { loading, error, logout, resetError } = useSignInOut();
  const { popupState, openPopup, closePopup } = usePopup();

  useEffect(() => {
    if (error) openPopup();
  }, [error]);

  const onPressLogout = () => {
    logout();
  };

  const onClosePopup = () => {
    closePopup();
    resetError();
  };

  if (loading) return <Loader />;

  return (
    <div>
      {popupState && (
        <Popup
          title="Error"
          content="Cannot logout on the server. Check your internet connection"
          buttons={
            <Button active onPress={onClosePopup}>
              OK
            </Button>
          }
        />
      )}
      <Button active onPress={onPressLogout}>
        SIGN OUT
      </Button>
    </div>
  );
};

export default Profile;
