# React 和 Spring Boot 联系人管理应用

这是一个使用 React 前端和 Spring Boot 后端的全栈应用程序。该应用程序提供了一个联系人管理系统，允许用户添加和查看联系人信息。

## 技术栈

### 后端

- Java 8
- Spring Boot 2.2.4
- Spring Data JPA
- Maven

### 前端

- React 16.12.0
- React Scripts 3.3.1
- Node.js (建议使用 LTS 版本)

## 系统要求

- JDK 8 或更高版本
- Node.js 12 或更高版本
- Maven 3.6 或更高版本

## 运行说明

### 1. 启动后端服务

1. 打开命令行终端，进入项目根目录
2. 运行以下命令编译并启动 Spring Boot 服务：

```bash
# Windows 环境使用
.\mvnw.cmd spring-boot:run

# Linux/Mac 环境使用
./mvnw spring-boot:run
```

后端服务将在 http://localhost:8080 启动

### 2. 启动前端应用

1. 打开新的命令行终端
2. 进入项目的 client 目录：

```bash
cd client
```

3. 首次运行需要安装依赖：

```bash
npm install
```

4. 启动前端开发服务器：

```bash
npm start
```

前端应用将在 http://localhost:3000 启动

## 访问应用

启动完成后，在浏览器中访问 http://localhost:3000 即可使用应用程序。

## 功能说明

- 查看联系人列表
- 添加新联系人
- 实时更新联系人信息

## 开发说明

### 后端开发

- 后端 API 位于 `src/main/java/com/microsoft/com/demo` 目录
- 主要 API 端点：
  - GET `/api/contacts`: 获取所有联系人
  - POST `/api/contacts`: 创建新联系人

### 前端开发

- React 组件位于 `client/src/components` 目录
- 主要组件：
  - `Contacts.js`: 联系人列表组件
  - `AddContacts.js`: 添加联系人表单组件
  - `SingleContact.js`: 单个联系人显示组件

## 注意事项

1. 确保在启动前端应用之前，后端服务已经成功运行
2. 默认情况下，后端服务运行在 8080 端口，前端开发服务器运行在 3000 端口
3. 如果端口被占用，可以修改 `application.properties` 文件中的端口配置
