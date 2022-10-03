// import './index.scss'
import styles from './index.module.scss'
import './other.css'
import SvgIcon from '../SvgIcon';
// import Worker from './example.js?worker';
// 1. 初始化 Worker 实例
// const worker = new Worker();
// 2. 主线程监听 worker 的信息
// worker.addEventListener('message', (e) => {
//   console.log(e);
// });



const icons = import.meta.glob('../../assets/icons/logo-*.svg',{ eager: true,import:'default' });
// const iconUrls = Object.values(icons).map(mod => mod);

const iconUrls = Object.values(icons).map((mod:any) => {
    // 如 ../../assets/icons/logo-1.svg -> logo-1
    const fileName = mod.split('/').pop();
    const [svgName] = fileName.split('.');
    return svgName;
  });
  
console.log(iconUrls)

import { ReactComponent as ReactLogo } from '@assets/react.svg';

export function Header(){

    let a=2332
    return <div>
        <p className={styles.header}>This is Header</p>
        <h3 className='currentHad'>我是标题</h3>
        <ReactLogo />

        {iconUrls.map((item) => (
            <SvgIcon name={item} key={item} width="50" height="50" />
        ))}
       

    </div>
}