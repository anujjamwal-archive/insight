package com.insight.server.data.service;

import com.insight.server.data.model.Query;
import com.insight.server.data.model.QueryResult;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
public class DataService {

  @RequestMapping(value = "/datasets/{id}/query", method = RequestMethod.POST)
  public QueryResult query(@RequestBody Query query) {
    return null;
  }
}
