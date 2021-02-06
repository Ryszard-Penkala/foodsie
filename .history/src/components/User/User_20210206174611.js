import React from 'react';
import styles from './User.module.scss'

const User = () => {
    return (
        <div className= {styles.userBlock} >
            <p className= {styles.userName}>Jan Kowalski</p>
            <img className={styles.userImage} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAXVBMVEX///91dXV/f394eHi6urq1tbXS0tL39/d9fX38/Pzz8/ORkZGMjIz29vampqbi4uKGhobAwMDt7e3MzMyfn5/Ozs6Wlpbb29uwsLDGxsbV1dXf39+jo6Po6Oi+vr7/cgGIAAADXElEQVR4nO3cCZaqMBAFUMKkiIADKmDD/pfZDu13QCWkAlX88+4KXknIAIWOAwAAAAAAAAAAAAAAYMki9NN45Xqeu4pTP1xw5+knK5bqxbLIuFPpmq1b6f9qWM+4s2lIfPd9/DPXT7jzdSm/xL+UsOVO+FUdf49/tt9wp/xsN+/Or9Q85M75SaET/yzgTvpW9KObX6k04k7bFuX6+ZXK5VXQ4/e/XAPuvK+0x/+NsPtg1ze/UqLmolpr/nw2l7QeaKxfbXvu1HelSX6lxOwqko79zyeulJ2db5ZfKZ87+dXM8AKcLoGM88HaNL9Sa+7sFx/OXzqW3NnPMvP8Skk4J/feRDySsKEgjCARY2hBya8U//OikFYA/5bOeBW74l/LUloB/Acbo43oXcyd31nRClhx53eMN0JXLnd+x6MV4HHnn34Bkx9Ck7+JJz+NTn4hI24lGu781M1cxZ2fup0W8GSFdKDhv4cdJ6AUIOFISTrU19zpz6b+WIXyYKvkzn4x+UeL5msZ/yp2ZXoJpFwAx9maFbDjzn23N8kv6BWTszF4yedKeslnsqXj38Y96b2hkLCJeNLzYMN/kHk1+WYPJ+pxDSS22zg97gNx4/8m1JpNXWHzz6ONxoomuenvZNvVdilo//De98bXRsz+7YuJtx5fZEG7+TuQ8FK7h6f2+yYU8PwHAAAAAACg26yuyiDNT8eZ03lGefPTkSZPgzLM5J9qFoey2H871O/T9YG/1/Wt2aHJNXuH3Nw/yLoYSdX+grvLspDymfoxMO55ioMj81PeqEqpPXNpyPawKKp+iC2LV95PxXEd6oL42z9yi5G7PqIdsdevLd6OdxmShthr+Z7rjzMtJYGVkf+OVwxfwsw3eKfdo4Rg4Dmp628j6Nwhe4hqo56IvuKhnsNH/mCD/5kXDDIhbazPnJ/FA7wIPA4++h/Nrb+KLUcaPv9YvpebkeMry1+YGX40L6YCg3+NsMHanwZkY4//P56lBSEacf58trKzr2C4gW+s9OVsmAbQmWdjQSN+JENTWChgkMOLrjl9V3TgzG+ju5T0pwV09DHUq5vSPnqDNekjJTr6x6KDHoG70T/X5c2vFApAASgABaAAFIACUAAKQAEogK8AAAAAAAAAAAAAAAD47/wCj+oydTfCv7MAAAAASUVORK5CYII=" alt="user"/>

        </div>
     );
}

export default User;