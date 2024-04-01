# 创建应用实例
import sys

from wxcloudrun import app
from flask import render_template

@app.route('/')
def my_index():
    return render_template("index.html")

# 启动Flask Web服务
if __name__ == '__main__':
    app.run(host=sys.argv[1] ,  port=sys.argv[2])
