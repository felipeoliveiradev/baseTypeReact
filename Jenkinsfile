pipeline {
  agent {
    label 'react-agent'
  }
  options { disableConcurrentBuilds() }
  stages {
    stage('build: install dependencies') {
      steps {
        sh 'yarn'
      }
    }
    stage('test: unit tests') { 
      steps {
        echo 'Not Implemented'
      }
    }
    stage('code: sonarqube') {
      steps {
        withSonarQubeEnv('SonarServer') {
          sh "${env.SONAR_RUNNER_HOME}/bin/sonar-scanner -Dsonar.branch.name=${env.BRANCH_NAME}"
        }
      }
    }
    stage('deploy: dev') {
      when {
        branch 'develop'
      }
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-portal-dev']]) {
          sh 'yarn build:develop'
          sh './deploy.py -d build'
        }
      }
      post{
        success {
          slackSend(channel: "devops", message: "SUCCESSFUL: Deployment in DEV ('${env.JOB_NAME} #${env.BUILD_NUMBER}' <${env.RUN_DISPLAY_URL}|Open>)", color: 'good')
        }
        failure {
          slackSend(channel: "devops", message: "FAILED: Deployment in DEV ('${env.JOB_NAME} #${env.BUILD_NUMBER}' <${env.RUN_DISPLAY_URL}|Open>)", color: 'danger')
        }
      }
    }
    stage('deploy: qa') {
      when {
        branch 'develop'
      }
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-portal-qa']]) {
          sh 'yarn build:qa'
          sh './deploy.py -d build'
        }
      }
      post {
        success {
          slackSend(channel: "devops", message: "SUCCESSFUL: Deployment in QA ('${env.JOB_NAME} #${env.BUILD_NUMBER}' <${env.RUN_DISPLAY_URL}|Open>)", color: 'good')
        }
        failure {
          slackSend(channel: "devops", message: "FAILED: Deployment in QA ('${env.JOB_NAME} #${env.BUILD_NUMBER}' <${env.RUN_DISPLAY_URL}|Open>)", color: 'danger')
        }
      }
    }
    stage('deploy: production') {
      when {
        branch 'master'
      }
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws-portal-production']]) {
          sh 'yarn build:production'
          sh './deploy.py -d build'
        }
      }
      post {
        success {
          slackSend(channel: "devops", message: "SUCCESSFUL: Deployment in Production ('${env.JOB_NAME} #${env.BUILD_NUMBER}' <${env.RUN_DISPLAY_URL}|Open>)", color: 'good')
        }
        failure {
          slackSend(channel: "devops", message: "FAILED: Deployment in Production ('${env.JOB_NAME} #${env.BUILD_NUMBER}' <${env.RUN_DISPLAY_URL}|Open>)", color: 'danger')
        }
      }
    }
  }
  post {
    failure {
        slackSend(channel: "devops", message: "FAILED: Job '${env.JOB_NAME} #${env.BUILD_NUMBER}' (<${env.RUN_DISPLAY_URL}|Open>)", color: 'danger')
    }
  }
}