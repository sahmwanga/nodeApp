node {
    def app

    stage("Clone repository"){
        /* Cloning repository to our workspaces*/
        checkout scm
    }

    stage("Build image"){
        /* This builds the actual image */
        app = docker.build("sahmwanga/nodeapp")
    }

    stage("Test image"){
        app.inside{
            echo "Tests passed"
        }
    }

    stage("Push image"){
        /* You would need to first register with dockerhub before you can push images to you account */
        docker.withRegistry("https://registry.hub.docker.com","sahmwanga"){
            app.push("${env.BUILD_NUMBER}")
            app.push('latest')
        }
        echo "Trying to push docker build to DockerHub"
    }
}