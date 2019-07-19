package com.insight.server.data.repository;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QueryException extends Exception {
  private static final long serialVersionUID = 187927223232L;
  private String errorCode;

  public QueryException(String errorCode, String message, Throwable cause) {
    super(message, cause);
    this.errorCode = errorCode;
  }
}