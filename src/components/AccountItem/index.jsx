import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../image';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ebabb2cc8284ccb53599b8b6726dd98e~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=3117a0ca&x-expires=1759410000&x-signature=Cz9QxLJAs9bTG%2Bdhw9N8O67d7Z4%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt="Sang"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Bui Huu Sang</span>
                    <FontAwesomeIcon className= {cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>buihuusang</span>
            </div>
        </div>
    );
}

export default AccountItem;
