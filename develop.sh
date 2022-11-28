#!/bin/bash


setupGitHooks() {
  git config core.hooksPath .gitHooks
}

checkShellCheck() {
  shellcheck src/**
}

setupGitHooks
