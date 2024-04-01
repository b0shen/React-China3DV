from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import pymysql
import config
from flask import Flask, render_template
# 因MySQLDB不支持Python3，使用pymysql扩展库代替MySQLDB库
pymysql.install_as_MySQLdb()

# 初始化web应用
app = Flask(__name__, static_folder='../static',  #设置静态文件夹目录
instance_relative_config=True)
app.config['DEBUG'] = config.DEBUG

@app.route('/')
def index():
    return render_template('../static/index.html')

# 设定数据库链接
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://{}:{}@{}/flask_demo'.format(config.username, config.password,
                                                                             config.db_address)

# 初始化DB操作对象
db = SQLAlchemy(app)

# 加载控制器
from wxcloudrun import views

# 加载配置
app.config.from_object('config')
