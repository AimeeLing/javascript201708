#Git / GitHub
**一、Git**：项目源代码的版本控制器（代码管理工具），方便团队协作开发
**二、GitHub**：就是git仓库（相当于服务器）
>- https://github.com/
>- 我们所熟知的js类库框架的项目源代码在github上都有托管
>- 全世界权威知名，如果你的gitHub账号的粉丝很多，那么在全世界你都可以玩的很Happy
>- 可以基于gitHub免费做博客或者免费发布自己的网站…
	- settings
		- Notifications消息中心
		- Repositories仓库记录中心
	- new repository 创建一个新仓库	
		- Repository name 仓库名
		- Initialize this repository with a README 是否创建一个README.md文件
		- README
			- 相当于说明书，是对项目的描述，介绍了项目的简介以及如何使用等	
			- 这个文件内容的编写采用的是markdown语法编写的

**三、git把代码从仓库上拉下来，并且可以把代码提交到git上**
>第一次使用git，我们先在本地把邮箱和用户名配置一下（配置的用户名和邮箱可以随便设置，建议大家和gitHub的用户名和邮箱保持一致）
	>- git config --global user.name "你的gitHub用户名"  （查看配置用户名：git config --global user.name）	
	>- git config --global user.email "你的gitHub邮箱"  （查看配置邮箱：git config --global user.email）

**本地建立一个git仓库，并且和远程能够建立连接**
>1、建立本地的git仓库
	>-  $ git init 在当前的项目文件夹中生成一个.git文件（勿删除，删除后就不是本地仓库了）
	
>2、让本地仓库和远程仓库之间建立连接的通道
	>- $ git remote add [名字] [远程仓库的地址] 【https://github.com/zhufengpeixun/JavaScript201708.git】
		-  git remote -v 查看连接情况
		-  git remote rm [名字] 删除连接通道 【删除连接通道origin】
		- git remote update [名字] 更新连接通道

>3、git pull origin master 通过origin这个通道和远程仓库连接，并且把master这个主分支中的源代码更新到本地仓库中（pull -> 拉取）
><font color="red">**注意：**为了防止冲突，只能看不能改</font>

-----------------------------
**以上3个步骤等同于git clone [远程仓库地址]实现**
>$ git clone [远程仓库地址]
	>- 在本地创建了一个git仓库
	>- 让本地仓库和远程仓库保持了连接
	>- 把远程仓库中的源代码拉取到了本地

>4、在本地仓库中，把修改完成的代码提交到远程仓库上
>**本地git仓库分为三个区域：**
	>- 工作区：开发代码
	>- 暂存区：临时存储
	>- 历史区：记录了各个版本，我们可以在这个区域中查看每一时段的代码更新，也可以把代码回滚到某一时段
	
>**流程：**
	工作区（开发代码）->提交到暂存区（临时存储）->提交到历史区（生成版本）->（需要回滚的时候）直接从历史区把某一个版本代码覆盖工作区的代码

**如果需要推送到远程仓库，我们把本地历史区的内容推送到远程仓库即可**
>touch .gitignore 创建一个.gitignore文件
> .gitignore：这个文件中存放的是所有上传远程服务器需要忽略的文件
	>- .idea
	>- DS_Store
	>- node_modules

**把工作区的文件上传到暂存区：**
>- git add [某一个文件：路径要正确] 把工作区某一个文件上传到暂存区
>- git add . 或者 git add -A 把工作区所有修改的文件上传到暂存区


**把暂存区的内容上传到历史区生成一个项目版本：**
>- git commit -m ["本次提交的描述"]

**git status 查看当前本地仓库文件的状态**
>- 红色文字代表当前文件还未增加到暂存区
>- 绿色文字代表当前文件还未上传到历史区

**把本地仓库历史区中的内容同步到远程仓库中：**
>- git push origin master 把本地仓库历史区中的内容（包含提交的记录）都更新到远程仓库（origin对应的远程仓库）的master主分支下【把本地推送到远程仓库】==>此处应该叫同步，这样比提交叫法准确，因为在每一push后，不仅仅是代码推送到远程仓库中，而且本地新增加的项目版本记录也都同步到了远程仓库上

----------------
######git 把代码从仓库上拉下来，并且可以把代码提交到git上步骤如下：
>1、git init
>2、git remote add [名字] [远程仓库地址] 本地仓库与远程仓库建立连接通道
>3、git pull [名字] master 通过[名字]这个通道和远程仓库连接，并且把master这个主分支中的源代码更新到本地仓库中
>**注意：**
>- 以上3个步骤可以等同于git clone [远程仓库地址]

>4、touch .gitignore 在本地仓库新建.gitignore文件（这个文件中存放的是所有上传远程服务器需要忽略的文件）
>- .idea
>- .DS_Store
>- node_modules
>- ……

>5、本地仓库内容创建填充……
>6、git add -A / git add .  把工作区所有修改的文件上传到暂存区
>7、git commit -m "本次提交的描述"  把暂存区的内容上传到历史区生成一个项目版本
>8、git push origin master 把本地推送到远程仓库

####git和svn区别？
>1、git是分布式，svn不是
>2、集中式

####代码优化：
>1、
>2、服务器分布式：

-----------------------------------
####Mark Down：
		技术人员编写技术文档的一个新神器（一种新的语法），使用MD编写技术文档，不需要考虑样式和html结构等

编写MD的开发IDE：
	>1、webstorm中安装MD插件（不推荐）
	>2、马克飞象（推荐）
			>- 专门为印象笔记打造的一款MD的开发工具，我们可以使用印象笔记的账号登录马克飞象，在马克飞象中编辑的文件会同步到印象笔记中
			 [ https://maxiang.io/ （网页版）]
			



	
	
	
	


		
		
	


	