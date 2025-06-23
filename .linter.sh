#!/bin/bash
cd /home/kavia/workspace/code-generation/smallbizfinance-9946-c63d1d57/smallbizfinance
source venv/bin/activate
flake8 .
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

