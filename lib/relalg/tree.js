/*
 * The classes to respresent a tree of the relational algebra expression
 */
define([], function(undefined) {
  function Assignment(name, relation) {
    this.name = name
    this.relation = relation
  }
  Assignment.prototype.name = null
  Assignment.prototype.relation = null
  
  function Relation(relation) {
    this.relation = relation
  }
  Relation.prototype.relation = null
  
  function RelationReference(name){
    this.name = name
  }
  RelationReference.prototype.name = null


  function Projection( projectionList, relation ) {
    this.projectionList = projectionList
    this.relation       = relation
  }
  Projection.prototype.projectionList = null
  Projection.prototype.relation       = null


  function Rename( relation, from, to ) {
    this.relation = relation
    this.from     = from
    this.to       = to
  }
  Rename.prototype.relation = null
  Rename.prototype.from     = null
  Rename.prototype.to       = null

  function Selection( criteria, relation ) {
    this.criteria = criteria
    this.relation = relation
  }
  Selection.prototype.criteria = null
  Selection.prototype.relation = null

  function ProjectionList( initial ) {
    this.list = (initial instanceof Array) ? initial : [initial]
  }
  ProjectionList.prototype.list = null
  ProjectionList.prototype.add = function( next ) {
    this.list.push(next)
    return this
  }
  
  function Union( left, right ) {
    this.left  = left
    this.right = right
  }
  Union.prototype.left  = null
  Union.prototype.right = null
  
  function Intersection( left, right ) {
    this.left  = left
    this.right = right
  }
  Intersection.prototype.left  = null
  Intersection.prototype.right = null
  
  function Difference( left, right ) {
    this.left  = left
    this.right = right
  }
  Difference.prototype.left  = null
  Difference.prototype.right = null
  
  function Cartesian( left, right ) {
    this.left  = left
    this.right = right
  }
  Cartesian.prototype.left  = null
  Cartesian.prototype.right = null
  
  function Join( left, criteria, right ) {
    this.left     = left
    this.criteria = criteria
    this.right    = right
  }
  Join.prototype.left     = null
  Join.prototype.criteria = null
  Join.prototype.right    = null 
  
  function NaturalJoin( left, right ) {
    this.left  = left
    this.right = right
  }
  NaturalJoin.prototype.left  = null
  NaturalJoin.prototype.right = null
  
  function Division( left, right ) {
    this.left  = left
    this.right = right
  }
  Division.prototype.left  = null
  Division.prototype.right = null
  
  function Attribute( name ) {
    this.name = name
  }
  Attribute.prototype.name = null
  
  function Value( value ) {
    this.value = value
  }
  Value.prototype.value = null
  
  function Criteria( left, op, right ) {
    this.left  = left
    this.op    = op
    this.right = right
  }
  Criteria.prototype.left  = null
  Criteria.prototype.op    = null
  Criteria.prototype.right = null
  
  function CriteriaComposition( left, comp, right ) {
      this.left  = left
      this.comp  = comp
      this.right = right
  }
  CriteriaComposition.prototype.left  = null
  CriteriaComposition.prototype.comp  = null
  CriteriaComposition.prototype.right = null
  
  return {
    Assignment: Assignment,
    Relation: Relation,
    RelationReference: RelationReference,
    Projection: Projection,
    Rename: Rename,
    Selection: Selection,
    ProjectionList: ProjectionList,
    Union: Union,
    Intersection: Intersection,
    Difference: Difference,
    Cartesian: Cartesian,
    Join: Join,
    NaturalJoin: NaturalJoin,
    Division: Division,
    Attribute: Attribute,
    Value: Value,
    Criteria: Criteria,
    CriteriaComposition: CriteriaComposition
  }
})