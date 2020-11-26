node {
    stage("Clone repository"){
        /* Cloning repository to our workspaces*/
        git 'https://github.com/sahmwanga/nodeApp.git'
    }
    stage("Build image"){
        sh "docker build -t sahmwanga/nodeapp:v1.0.1 ."
    }
    
    stage("Push image to docker hub"){
        withCredentials([string(credentialsId: 'docker-hub-pwd', variable: 'dockerHubPwd')]) {
            sh "docker login -u sahmwanga -p ${dockerHubPwd}"
        }
        sh 'docker push sahmwanga/nodeapp'
    }
    stage("Run container  on Dev Server"){
        //run command in remote machine
        // sh 'docker run -p 8000:8000 -d --name nodeapp sahmwanga/nodeapp:v1.0.1'
        sh 'docker-compose up -d'
    }
}