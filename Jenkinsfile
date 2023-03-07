pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
                git branch:'master', url:'https://github.com/Serafimas86/Exercicio-e2e---M-dulo-12.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage('Executar testes') {
            steps {
                bat 'npm run cy:run'   
            }
        }
    }
}