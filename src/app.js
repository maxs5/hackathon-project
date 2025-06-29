<<<<<<< HEAD
import './styles.css';

import { CustomMenu } from './menu.js';
import { ClicksModule } from './modules/clicks.module.js';
import { SparkModule } from './modules/spark.module.js';


// Создаём меню и привязываем его к <ul id="menu">
const menu = new CustomMenu('#menu');

// Добавляем модули в меню
menu.add(new ClicksModule());
menu.add(new SparkModule());
=======
import './styles.css'

>>>>>>> f2686dda40fbc3d1b883d7cf37b290503370a0c9
